import numpy as np
from sklearn.linear_model import LinearRegression

# Mock data for yield rates
data = np.array([
    [1, 0.05],  # Month 1, 5% yield
    [2, 0.07],  # Month 2, 7% yield
    [3, 0.06],  # Month 3, 6% yield
])

# Prepare the data
X = data[:, 0].reshape(-1, 1)  # Time
y = data[:, 1]  # Yield

# Train the model
model = LinearRegression()
model.fit(X, y)

# Predict optimal yield for the next period
next_period = np.array([[4]])  # Month 4
predicted_yield = model.predict(next_period)

print(f"Predicted Yield for next period: {predicted_yield[0]:.2%}")
