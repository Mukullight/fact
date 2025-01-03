# VWAP reinforcement learning Environment Class Explanation

The `VWAPEnvironment` class defines a custom OpenAI Gym environment for simulating trade execution based on the Volume Weighted Average Price (VWAP) strategy. Below is a detailed explanation of each component and method within the class.

## Class Definition

```python
class VWAPEnvironment(gym.Env):
    def __init__(self, data, initial_inventory, preferred_timeframe=390):
    super(VWAPEnvironment, self).__init__()

```

Parameters:

data: A pandas DataFrame containing market data (e.g., bid prices, volume, slippage).
initial_inventory: The starting number of shares available for trading.
preferred_timeframe: The time frame in minutes over which trading is simulated (default is 390).
The super() call initializes the parent class gym.Env.
### Action space

+Action Space: The action space is defined as a discrete space with 4 possible actions. This could represent different quantities of shares to sell (e.g., 0, 1, 2, or 3 shares).

```python
self.action_space = spaces.Discrete(4)  
```

### observation space 
+ Observation Space: The observation space is defined as a dictionary containing:
  * max_bid_price: The maximum bid price at the current step (float).
 * volume: The trading volume at the current step (float).
 * close: The closing price at the current step (float).
 * slippage: The slippage at the current step (float).
 * remaining_inventory: The number of shares remaining to trade (integer).


```python
self.observation_space = spaces.Dict({
    'max_bid_price': spaces.Box(low=0, high=np.inf, shape=(1,), dtype=np.float32),
    'volume': spaces.Box(low=0, high=np.inf, shape=(1,), dtype=np.float32),
    'close': spaces.Box(low=0, high=np.inf, shape=(1,), dtype=np.float32),
    'slippage': spaces.Box(low=0, high=np.inf, shape=(1,), dtype=np.float32),
    'remaining_inventory': spaces.Box(low=0, high=self.initial_inventory, shape=(1,), dtype=np.int32),
})

```


### Reset and observation method

Purpose: Resets the environment to its initial state.
Attributes Reset:
current_step: Resets the step counter to 0.
remaining_inventory: Resets the inventory to the initial inventory.
trades: Initializes an empty list to store the history of trades.
Returns: Calls _get_observation() to return the initial state of the environment.

```python
def reset(self):
    self.current_step = 0
    self.remaining_inventory = self.initial_inventory
    self.trades = []  # Initialize as a list to store trade history
    return self._get_observation()
def _get_observation(self):
    return {
        'max_bid_price': np.array([self.data.iloc[self.current_step]['max_bid_price']]),
        'volume': np.array([self.data.iloc[self.current_step]['volume']]),
        'close': np.array([self.data.iloc[self.current_step]['close']]),
        'slippage': np.array([self.data.iloc[self.current_step]['slippage']]),
        'remaining_inventory': np.array([self.remaining_inventory]),
    }

```

### Reward calculation method 

```python
def _calculate_reward(self, shares_to_sell, effective_price):
    # Calculate VWAP for the current step
    total_volume = self.data['volume'][:self.preferred_timeframe].sum()
    ideal_vwap_allocation = (self.data.iloc[self.current_step]['volume'] / total_volume) * self.initial_inventory

    # Calculate the deviation penalty
    vwap_deviation_penalty = -abs(shares_to_sell - ideal_vwap_allocation)

    # Calculate the slippage penalty
    slippage_penalty = -(self.data.iloc[self.current_step]['slippage'] * shares_to_sell)

    # Combine the components into the total reward
    reward = vwap_deviation_penalty + slippage_penalty 
    return reward

```
and the agent is called in the main function