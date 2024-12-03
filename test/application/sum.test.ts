import { SumUseCase } from "../../src/application/usecase/sumusecase"
import { expect, test } from '@jest/globals';

test(' add 1 +2 to equals 3', ()=>{
    expect( new SumUseCase().Sum(1,2)).toBe(3);
})