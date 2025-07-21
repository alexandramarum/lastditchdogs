import uuid
from pydantic import BaseModel

class DogEntity(BaseModel):
    id: uuid.UUID
    name: str
    breed: str
    age: int
    description: str
    priority: str