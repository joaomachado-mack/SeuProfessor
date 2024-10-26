from flask import Blueprint, request, jsonify

ai_bp = Blueprint('ai', __name__)

@ai_bp.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '')
    response = f"Aqui está a resposta da IA para a pergunta: {question}"
    return jsonify({"question": question, "response": response})
