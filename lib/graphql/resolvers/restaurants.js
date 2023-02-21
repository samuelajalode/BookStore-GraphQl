"use strict";
/*import { CreateRestaurant, UpdateRestaurant, DeleteRestaurant } from './type';
import {Restaurant, RestaurantType} from '../../models/restaurantModel';


const RestaurantsResolver = {

    Query: {
        allRestaurants: async () => {
            try{
                const Restaurants = await Restaurant.find({});
                return Restaurants;
        } catch(err) {
            console.log(err);
        }
    },

        singleRestaurant: async (_:unknown, args:DeleteRestaurant) => {
             try{
        const restaurant = await Restaurant.findById({_id: args.id});
        return restaurant;
                }            catch(err) {
    console.log(err);
            }
            },
    },

    Mutation: {
        createRestaurant:async(_:unknown, args:CreateRestaurant) => {
            try{
                const newRestaurant = {
                    address: args.input.address,
                    borough: args.input.borough,
                    cuisine: args.input.cuisine,
                    grades: args.input.grades,
                    name: args.input.name,
                    restaurant_id: args.input.restaurant_id
                }

                const Restaurants = await Restaurant.create(newRestaurant);

                if(Restaurants) {
                    return Restaurants
                }

            } catch(err) {
                console.log(err);
            }
        },

        
        updateRestaurant: async(_:unknown, args:UpdateRestaurant) => {
            try{
                const id = args.input.id;
                const updateRestaurant = {
                    id : args.input.id,
                    address: args.input.address,
                    borough: args.input.borough,
                    cuisine: args.input.cuisine,
                    grades: args.input.grades,
                    name: args.input.name,
                    restaurant_id: args.input.restaurant_id
                }

                const restaurant = await Restaurant.findByIdAndUpdate(id, updateRestaurant, {new: true});
                if(restaurant) {
                    return restaurant
                }

    } catch (err) {
    console.log(err);
    }
        },


        deleteRestaurant: async(_:unknown, args:DeleteRestaurant) => {
            try{
                const deleteRestaurant = await Restaurant.findByIdAndDelete({_id: args.id});
                if(deleteRestaurant) {
                    return {
                        message: "Restaurant deleted successfully"
                    }
                }

    } catch (err) {
    console.log(err);
    }
        }
    }
}

export default RestaurantsResolver

*/ 
