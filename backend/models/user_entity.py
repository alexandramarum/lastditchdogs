import uuid
from pydantic import BaseModel

class UserEntity(BaseModel):
    id: uuid.UUID 
    username: str
    email: str
    is_admin: bool