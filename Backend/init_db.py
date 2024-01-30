import sqlite3
from werkzeug.security import generate_password_hash

# Initial recipes
recipes = [
    {
        'title': "Spaghetti",
        'description': "Delicious spaghetti with tomato sauce...",
        'image': "logo.png"
    },
    # ... more recipes ...
]

# Initial users
users = [
    {
        'username': "john_doe",
        'password': generate_password_hash("password123", method='pbkdf2:sha256'),
        'is_admin': False
    },
    {
        'username': "admin",
        'password': generate_password_hash("admin", method='pbkdf2:sha256'),  # Hash the admin password
        'is_admin': True
    }
    # ... more users ...
]

# Connect to the database
connection = sqlite3.connect('recipe.db')
cursor = connection.cursor()

# Check if recipes table already exists
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='recipes'")
recipes_table_exists = cursor.fetchone()

# Check if users table already exists
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
users_table_exists = cursor.fetchone()

# Create and insert into tables if they don't exist
if not recipes_table_exists:
    cursor.execute("""
    CREATE TABLE recipes (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
    )
    """)
    print("Table 'recipes' created successfully!")

    for recipe in recipes:
        cursor.execute("INSERT INTO recipes (title, description, image) VALUES (?, ?, ?)",
                       (recipe['title'], recipe['description'], recipe['image']))
    print("Recipes inserted successfully!")

if not users_table_exists:
    cursor.execute("""
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,  # Added email column
        password TEXT NOT NULL,
        is_admin BOOLEAN NOT NULL DEFAULT 0
    )
    """)
    print("Table 'users' created successfully!")

    for user in users:
        cursor.execute("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)",
                       (user['username'], user.get('email', ''), user['password'], user['is_admin']))  # Added email in insertion
    print("Users inserted successfully!")

# Commit the changes and close the connection
connection.commit()
connection.close()

print("Database initialized successfully!")
