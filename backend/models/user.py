import uuid
from sqlmodel import Field, SQLModel

class User(SQLModel, table=true):
    id: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        primary_key=True,
        nullable=False
    )
    username: str
    email: str
    is_admin: bool
