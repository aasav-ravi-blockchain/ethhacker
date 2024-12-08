import numpy as np

# Mock price data for risk assessment
prices = np.array([100, 102, 105, 103, 108])

# Calculate daily returns
returns = np.diff(prices) / prices[:-1]

# Calculate risk (volatility)
risk = np.std(returns)

print(f"Portfolio Volatility: {risk:.2%}")
