# import module and library 
from flask import Flask, render_template, request
from werkzeug.serving import run_simple
import webbrowser

# Declare
app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
    # app.config["TEMPLATES_AUTO_RELOAD"] = True
    # port_number = 2020
    # webbrowser.open(f'http://127.0.0.1:{port_number}')
    # app.run(threaded=True, port=port_number, debug=True)
    # run_simple('localhost', port_number, app, threaded=True)
