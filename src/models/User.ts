import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class User extends Model {
    public id!: string;
    public email!: string;
    public firebaseUid!: string;
    public displayName?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        firebaseUid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'users',
    },
);

export default User;
