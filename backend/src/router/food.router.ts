import {Router} from 'express';
import { sample_foods, sample_tags } from '../data';
import { FoodModel } from '../models/food.model';
import asyncHandler from 'express-async-handler';
const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
       const foodsCount = await FoodModel.countDocuments();
       if(foodsCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await FoodModel.create(sample_foods);
       res.send("Seed Is Done!");
   }
   ))

// router.get("/", (req,res) => 
// {
//     res.send(sample_foods);
// })

router.get("/",asyncHandler(
    async (req, res) => {
      const foods = await FoodModel.find();
        res.send(foods);
    }
  ))

router.get("/search/:searchTerm",(req,res)=>
{
    const searchTerm=req.params.searchTerm;
    const foods= sample_foods.filter((food: { name: string; })=>food.name.toLowerCase().includes
    (searchTerm.toLowerCase()))
    res.send(foods);
})

router.get("/tags", (req,res) =>
{
    res.send(sample_tags);
})

router.get("/tag/:tagName", (req,res) =>
{
    const  tagName=req.params.tagName;
    const foods=sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(sample_foods);
})

router.get("/:foodId", (req,res) =>
{
    const foodId=req.params.foodId;
    const food= sample_foods.find(food=>food.id ==foodId);
    res.send(food);
})

export default router;

// function asyncHandler(arg0: (req: any, res: any) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
//     throw new Error('Function not implemented.');
// }
