import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
    user_id: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: Request): Promise<void> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if (!user) {
            throw new Error('Onlu authenticated users can change avatar');
        }

        if (user.avatar) {
        }
    }
}

export default UpdateUserAvatarService;
