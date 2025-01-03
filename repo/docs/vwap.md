## Volume-Weighted Average Price (VWAP)

**Volume-Weighted Average Price (VWAP)** is a trading benchmark that calculates the average price of a security, weighted by the trading volume, over a specified period. VWAP is commonly used in large order execution strategies to minimize market impact by aligning trades with the market’s volume patterns, helping traders avoid significantly moving the price.

### Key Points

- **Objective**: VWAP helps traders execute orders at a price close to the market’s average trading price, adjusted for volume. This approach reduces the risk of affecting the price with large orders, making it particularly useful for institutional traders.
- **Calculation**: VWAP is calculated by taking the sum of the product of price and volume for each trade, divided by the total volume over the specified period. Mathematically:

  \[
  \text{VWAP} = \frac{\sum_{t=1}^{T} (P_t \times V_t)}{\sum_{t=1}^{T} V_t}
  \]

  where:
  - \(P_t\) is the price at time interval \(t\)
  - \(V_t\) is the volume at time interval \(t\)
  - \(T\) is the total number of intervals.

- **Use Cases**:
  - **Institutional Trading**: VWAP is a common benchmark in institutional trading, often considered a “fair” price for large block orders.
  - **Passive Execution**: Traders who aim to minimize their market impact may use VWAP to match their trades to existing volume patterns.

### Advantages and Limitations

- **Advantages**: 
  - Helps avoid significant price impact.
  - Useful for achieving a price close to the market average over a period, especially in liquid markets.
- **Limitations**:
  - Less suitable in highly volatile or low-volume markets, where large orders can still disrupt the price.

### References

1. Madhavan, A. (2002). *VWAP Strategies in Equity Trading*. *Institutional Investor*.
2. Kissell, R., & Malamut, R. (2006). *Algorithmic Decision Making Framework: Trading Efficiency with Volume Weighted Average Price (VWAP)*.




# Python code for the calculation

# VWAP

The following libraries are imported for the calculation 


``` python
import numpy as np
import pandas as pd
``` 


python code for calculation of the vwap

```python


def get_vwap_trades(data, initial_inventory = 1000, preferred_timeframe=390):
    """
    Generates a trade schedule based on the Volume-Weighted Average Price (VWAP) strategy.

    Parameters:
    data (DataFrame): The input data containing timestamps, max_bid_price, volume, closing prices, and slippage.
    initial_inventory (int): The total number of shares to be sold over the preferred timeframe.
    preferred_timeframe (int): The total number of time steps (default is 390, representing a full trading day).

    Returns:
    DataFrame: A DataFrame containing the VWAP trades with timestamps, effective price, shares sold, and remaining inventory.
    """
    # Calculate the total volume over the preferred timeframe
    total_volume = data['volume'][:preferred_timeframe].sum()
    remaining_inventory = initial_inventory
    trades = []

    for step in range(min(len(data), preferred_timeframe)):
        if remaining_inventory <= 0:
            break  # Stop trading if no inventory left

        # Volume proportion for the current step
        volume_proportion = data.iloc[step]['volume'] / total_volume if total_volume > 0 else 0

        # Calculate the size of slice to sell based on VWAP allocation
        size_of_slice = min(np.floor(volume_proportion * initial_inventory), remaining_inventory)
        remaining_inventory -= int(size_of_slice)

        # Calculate effective price adjusted for slippage
        effective_price = data.iloc[step]['max_bid_price'] - data.iloc[step]['slippage']

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




