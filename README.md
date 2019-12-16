# Accounting notebook
A simple money accounting system


## Backend Setup
Open a terminal in the backend folder and execute the following steps:

### Create a Python virtualenv
```
python3 -m venv env
```

### Activate your virtualenv
```
source env/bin/activate
```

### Install backend dependencies
```
pip install -r requirements.txt
```

### Initialize the default database using the Django migration command
```
python manage.py migrate
```

### Load initial data from fixtures folder (Optional):
```
python manage.py loaddata fixtures/transactions.json
```

### Start the development backend server
```
python manage.py runserver
```

Now you can access http://localhost:8000/ and explore the backend API console, list and create new transactions.

### Using the backend API from the command line

#### Create a credit transaction
```
curl -X POST http://localhost:8000/transactions/ -d "amount=50.25&type=CREDIT"
```

#### Create a debit transaction
```
curl -X POST http://localhost:8000/transactions/ -d "amount=12.30&type=DEBIT"
```

#### Get a transaction details
```
curl http://localhost:8000/transactions/7/
```


## Frontend Setup
Open a terminal in the frontend folder and execute the following steps:

### Install frontend dependencies
```
yarn install
```

### Start the development frontend server
```
yarn dev
```

Open a browser tab in http://localhost:3000/ to access to the frontend web application.
