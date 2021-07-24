import { Body,Param, Controller, Get, Post,Req,Res} from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";
// import {Request,Response} from "express";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";




@Controller('tasks')
export class TasksController {

    constructor(private taskservice:TasksService){}

@Get()
getTasks(): Promise<Task[]> {
    return this.taskservice.getTasks()
}
// getTasks(@Req() req,@Res() res):string {
//     return res.send('techo')
// }                                           //opcional usando express es mejor usar la otra forma
@Get(":taskId")
getTask( @Param() taskId : string){
    console.log(taskId)
    return this.taskservice.getTask(taskId)
}

// @Post()
// createTask(@Body() task:CreateTaskDto):string {
//     console.log(task)
//     return 'pepe'

// }

@Post()
createTask(@Body() task:CreateTaskDto):Promise<Task>{
    return this.taskservice.createTask(task)
    
}

}
