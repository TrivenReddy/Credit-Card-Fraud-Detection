# install libraries ---
# pip install fastapi uvicorn 

# 1. Library imports
import uvicorn
from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import pickle

# 2. Create the app object
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. load the model
rgModel = pickle.load(open("ccd.pkl", "rb"))

# 4. Index route, opens automatically on http://127.0.0.1:80
@app.get('/')
def index():
    return {'message': 'Hello, World'}

@app.get("/predictIs_Fradulent_n")
def gePredictIs_Fradulent_n(Avg_Amt_Per_Transaction_Per_Day: float, Transaction_Amt: float, Total_Number_of_Declines_Per_Day: int,Daily_Chargeback_Avg_Amt: float,Month_Avg_Chbk_Amt:float ,Month_Chbk_Freq:int ,is_declined_n: int ,Is_Foreign_Transaction_n: int,Is_HighRisk_Country_n: int ):

    #prediction = rgModel.predict([[1500.0,36000.0,0,754.0,585.0,7,1,1,1]])
    prediction = rgModel.predict([[Avg_Amt_Per_Transaction_Per_Day,Transaction_Amt,Total_Number_of_Declines_Per_Day,Daily_Chargeback_Avg_Amt,Month_Avg_Chbk_Amt,Month_Chbk_Freq,is_declined_n,Is_Foreign_Transaction_n,Is_HighRisk_Country_n]])
    val = prediction[0];
    # print(val);
    # return {'Outcome': val}
    return {'message': str(val)}

# 5. Run the API with uvicorn
if __name__ == '__main__':
    uvicorn.run(app, port=80, host='0.0.0.0')
#http://127.0.0.1/predictIs_Fradulent_n?Avg_Amt_Per_Transaction_Per_Day=1500.0&Transaction_Amt=36000.0&Total_Number_of_Declines_Per_Day=0&Daily_Chargeback_Avg_Amt=754.0&Month_Avg_Chbk_Amt=585.0&Month_Chbk_Freq=7&is_declined_n=1&Is_Foreign_Transaction_n=1&Is_HighRisk_Country_n=1
#100.0,3000.0,5,0.0,0.0,0,0,1,1
#500.0	26000.0	0	        800.0	677.2	6	0	1	1	
#100.0,4300.0,5,0.0,0.0,0,1	
#1500.0,36000.0,0,754.0,585.0,7,1,1,1	