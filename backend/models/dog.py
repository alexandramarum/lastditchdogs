import uuid
from sqlmodel import Field, SQLModel

class Dog(SQLModel, table=true):
    id: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        primary_key=True,
        nullable=False
    )
    name: str
    breed: str
    age: int
    description: str
    priority: str
