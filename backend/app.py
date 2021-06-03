from flask import *
from flask_cors import CORS, cross_origin



app = Flask(__name__)
# ------------------------ CONFIGURAÇÂO CORS API ------------------------------
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})



@app.get("/api/teste")
@cross_origin()
def hello():
    return jsonify({"print":"TESTE DE API GET"})





if __name__ == "__main__":
    app.run(debug=True)