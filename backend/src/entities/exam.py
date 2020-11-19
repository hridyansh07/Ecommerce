from sqlalchemy import Column, String
from .entity import Entity, Base
from marshmallow import Schema, fields


class Exam (Entity, Base):
    __tablename__ = 'exams'

    title = Column(String(20))
    description = Column(String(100))

    def __init__(self, title, description, created_by):
        Entity.__init__(self, created_by)
        self.title = title
        self.description = description


class ExamSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    description = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
