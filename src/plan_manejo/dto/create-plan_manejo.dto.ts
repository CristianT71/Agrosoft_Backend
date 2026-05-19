import { IsNotEmpty, IsString } from "class-validator";



export class CreatePlanManejoDto {

    @IsString()
    @IsNotEmpty()
    
}
