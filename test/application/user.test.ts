
import { expect, test } from '@jest/globals';
import { AddUserUseCase } from '../../src/application/usecase/addUserUseCase';
import { User } from '../../src/domain/model/user';

test(' given write name, last nae and email, when save the user , then the sistem save the user', async()=>{
    let user= new User();
    user.email="P@P.COM";
    const result = await new AddUserUseCase().addUser(user);
    expect(result).toEqual(expect.objectContaining({email:"P@P.COM"}));
})