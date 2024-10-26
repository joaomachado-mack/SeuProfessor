from flask import Blueprint, request, jsonify
from models.user_model import User
from flask_pymongo import PyMongo

user_bp = Blueprint('user', __name__)
mongo = PyMongo()

@user_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(data['name'], data['email'])
    mongo.db.users.insert_one(new_user.to_dict())
    return jsonify({"message": "Usuário registrado com sucesso!"})

@user_bp.route('/profile/<user_id>', methods=['GET'])
def profile(user_id):
    user = mongo.db.users.find_one({"_id": user_id})
    if user:
        return jsonify(User(user['name'], user['email']).to_dict())
    return jsonify({"message": "Usuário não encontrado."}), 404
