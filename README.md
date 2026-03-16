# CleanKart-Refactor-Iterate-an-Online-Shopping-Cart

During the refactoring process, the original shopping cart system contained several code smells such as poor variable naming, duplicated logic, long methods, and tightly coupled components. The first step was to improve readability by renaming variables and extracting reusable methods such as the total price calculation. This reduced duplication and made the code easier to understand.

In the next iterations, design patterns were introduced to improve flexibility and maintainability. The Strategy pattern was used to handle discount calculations. Instead of embedding discount logic directly inside the cart system, separate discount strategies were created. This allows the system to easily support new discount types without modifying the cart logic.

The Observer pattern was implemented to notify users when a product price changes. This decouples the notification system from the product management logic and allows multiple observers to react to events.

Finally, the Builder pattern was used to simplify the creation of complex product objects. This pattern makes object construction more readable and flexible, especially when many optional attributes are involved.

Overall, applying clean code principles and design patterns significantly improved the system architecture. The final code is more modular, easier to maintain, and scalable for future features.
