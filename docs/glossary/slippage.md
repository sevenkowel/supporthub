---
title: Slippage
description: Understanding price slippage in forex trading
---

# Slippage

## What is Slippage?

Slippage occurs when a trade is executed at a different price than expected. This typically happens during periods of high volatility or low liquidity, when prices move rapidly between the time an order is placed and when it's executed.

## Types of Slippage

### 1. Positive Slippage
- Order filled at a **better** price than requested
- **Buy orders**: Filled at lower price
- **Sell orders**: Filled at higher price
- **Example**: Buy order at 1.1000, filled at 1.0998 (positive 2 pip slippage)

### 2. Negative Slippage
- Order filled at a **worse** price than requested
- **Buy orders**: Filled at higher price
- **Sell orders**: Filled at lower price
- **Example**: Buy order at 1.1000, filled at 1.1003 (negative 3 pip slippage)

### 3. No Slippage
- Order filled exactly at requested price
- Common during normal market conditions with sufficient liquidity

## When Does Slippage Occur?

### 1. High Market Volatility
- Major economic news releases (NFP, CPI, interest rate decisions)
- Geopolitical events
- Market opening/closing times

### 2. Low Liquidity Periods
- Weekends (markets closed)
- Holiday periods
- During Asian session (for certain currency pairs)
- Outside normal trading hours

### 3. Large Order Sizes
- Orders larger than available liquidity at desired price
- Requiring multiple fills at different prices

### 4. Fast Market Conditions
- Rapid price movements
- Gaps in pricing
- Technical failures or delays

## How Slippage Affects Traders

### Impact on Different Order Types

#### Market Orders
- Most susceptible to slippage
- Executed at current market price
- No price guarantee

#### Limit Orders
- Guaranteed price but not execution
- May not be filled if price doesn't reach limit level
- Can experience partial fills

#### Stop Orders
- Becomes market order when triggered
- Can experience significant slippage
- Particularly vulnerable during gaps

## Slippage Protection Measures

### 1. Use Limit Orders
- Guarantees price (but not execution)
- Best for entering positions at specific levels

### 2. Avoid Trading During High-Impact News
- Check economic calendar
- Consider widening stops during volatile periods

### 3. Set Maximum Slippage Tolerance
- Some platforms allow slippage limits
- Order rejected if slippage exceeds tolerance

### 4. Use Guaranteed Stop Losses (GSLOs)
- Guaranteed execution at specified price
- Usually requires additional premium
- Not all brokers offer this feature

### 5. Monitor Market Conditions
- Check volatility indicators (ATR, VIX)
- Be aware of upcoming news events
- Understand pair-specific liquidity patterns

## Technical Aspects

### Execution Models
#### 1. Market Maker Execution
- Broker acts as counterparty
- May offer no-slippage guarantees
- Potential conflict of interest

#### 2. ECN/STP Execution
- Direct market access
- Real prices from liquidity providers
- Slippage reflects actual market conditions

### Price Feeds
- Multiple liquidity providers reduce slippage
- Depth of Market (DOM) shows available liquidity
- Faster connections reduce execution time

## Regulatory Considerations

### Best Execution Requirements
Brokers must demonstrate they're achieving the best possible execution for clients, considering:
- Price
- Costs
- Speed
- Likelihood of execution
- Order size and nature

### Disclosure Requirements
Brokers must disclose:
- Execution policy
- Slippage statistics
- Percentage of orders with positive/negative slippage
- Typical execution times

## Managing Slippage Risk

### For Retail Traders
1. **Use Appropriate Order Types**
   - Limit orders for entries
   - Consider market orders only when necessary

2. **Size Positions Appropriately**
   - Avoid positions too large for market liquidity
   - Consider breaking large orders into smaller ones

3. **Understand Pair Characteristics**
   - Major pairs (EUR/USD) have less slippage
   - Exotic pairs experience more slippage

4. **Test Broker Execution**
   - Review broker's execution statistics
   - Test with small orders during different conditions

### For Algorithmic Trading
1. **Implement Slippage Models**
   - Factor slippage into strategy backtesting
   - Use realistic assumptions about fill rates

2. **Monitor Execution Quality**
   - Track actual vs. expected fills
   - Adjust strategies based on execution data

3. **Use Smart Order Routing**
   - Route orders to best available liquidity
   - Consider multiple execution venues

## Real-World Examples

### Example 1: News Trading
```
Scenario: NFP announcement
Order: Market buy EUR/USD at 1.1000
Actual fill: 1.1025
Slippage: +25 pips (negative for buyer)
```

### Example 2: Gap Opening
```
Scenario: Weekend gap
Stop loss: Sell at 1.0950
Market opens: 1.0900
Slippage: -50 pips (worse exit)
```

### Example 3: Large Order
```
Scenario: $10 million USD/JPY order
Requested price: 110.00
Actual fills: 
  - 5M at 110.00
  - 3M at 110.02  
  - 2M at 110.05
Average price: 110.018 (1.8 pip slippage)
```

## Related Terms
- [Spread](/glossary/spread)
- [Liquidity](/glossary/liquidity)
- [Volatility](/glossary/volatility)
- [Execution Policy](/glossary/execution-policy)
- [Market Order](/glossary/market-order)

---

**Remember**: Slippage is a normal part of trading, especially during volatile conditions. Proper risk management and understanding of market conditions can help minimize its impact.