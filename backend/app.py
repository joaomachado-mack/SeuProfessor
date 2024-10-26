# backend/app.py

from flask import Flask
from ai import ai_bp  

app = Flask(__name__)

app.register_blueprint(ai_bp, url_prefix='/ai')

@app.route('/')
def index():
    return "Bem-vindo ao sistema de aulas de música utilizando IA! SeuProfessor!"

if __name__ == '__main__':
    app.run(debug=True)
