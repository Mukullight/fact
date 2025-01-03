## Time-Weighted Average Price (TWAP)

**Time-Weighted Average Price (TWAP)** is a trading algorithm primarily used to minimize the impact of large trades on the market. TWAP aims to execute an order by evenly distributing trades across a predetermined time period, achieving an average price close to the time-weighted market price. This strategy is commonly used when liquidity is a concern, or when traders want to reduce the visibility of large orders to avoid driving prices up or down.

### Key Points

- **Objective**: TWAP divides an order into smaller, evenly spaced trades across the desired timeframe, reducing market impact and avoiding price spikes.
- **Calculation**: The TWAP price is calculated by taking the average of prices over a set interval. For example:

  \[
  \text{TWAP} = \frac{\sum_{t=1}^{T} P_t}{T}
  \]

  where \(P_t\) is the price at each time interval \(t\), and \(T\) is the total number of intervals.
  
- **Use Cases**: 
  - For illiquid stocks or large block orders that could distort the market price.
  - Ideal when the market is relatively stable, as it doesn’t react to sudden price movements.

### References

1. Bouchey, P., Nemtchinov, V., Paulsen, A., & Stein, D. M. (2012). *Volatility Harvesting: Why Does Diversifying and Rebalancing Create Portfolio Growth?* The Journal of Wealth Management.
2. Johnson, B., & Jackson, R. (2021). *Algorithmic and High-Frequency Trading*. Wiley Trading Series.





# Python code for the calculation

# TWAP 
The following libraries are imported for the calculation 


``` python
import numpy as np
import pandas as pd
``` 


python code for calculation of the TWAP

```python

def get_twap_trades(data, initial_inventory = 1000, preferred_timeframe=390):
    """
    Generates a trade schedule based on the Time-Weighted Average Price (TWAP) strategy.

    Parameters:
    data (DataFrame): The input data containing timestamps, max_bid_price, volume, closing prices, and slippage.
    initial_inventory (int): The total number of shares to be sold over the preferred timeframe.
    preferred_timeframe (int): The total number of time steps (default is 390, representing a full trading day).

    Returns:
    DataFrame: A DataFrame containing the TWAP trades with timestamps, effective price, shares sold, and remaining inventory.
    """
    total_steps = len(data)
    twap_shares_per_step = initial_inventory / preferred_timeframe
    remaining_inventory = initial_inventory
    trades = []

    for step in range(min(total_steps, preferred_timeframe)):
        if remaining_inventory <= 0:
            break  # Stop trading if no inventory left
        
        # Calculate effective price adjusted for slippage
        effective_price = data.iloc[step]['max_bid_price'] - data.iloc[step]['slippage']

        # Calculate the size of slice to sell
        size_of_slice = min(np.floor(twap_shares_per_step), remaining_inventory)
        remaining_inventory -= int(size_of_slice)

        trade = {
            'timestamp': data.iloc[step]['timestamp'],
            'step': step,
            'effective_price': effective_price,
            'shares': size_of_slice,
            'inventory': remaining_inventory,
        }
        trades.append(trade)

    return pd.DataFrame(trades)



```




