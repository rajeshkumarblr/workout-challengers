package com.workoutch.dto.converter;

import com.workoutch.dto.FoodDTO;
import com.workoutch.domain.Food;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public final class FoodToFoodDTO implements Converter<Food, FoodDTO> {

    @Override

    public FoodDTO convert(final Food food) {
        FoodDTO dto = null;
        if (food != null) {
            dto = new FoodDTO(
                    food.getId(),
                    (food.getOwner() == null) ? null : food.getOwner().getId(),
                    food.getName(),
                    food.getDefaultServingType(),
                    food.getServingTypeQty(),
                    food.getCalories(),
                    food.getFat(),
                    food.getSaturatedFat(),
                    food.getCarbs(),
                    food.getFiber(),
                    food.getSugar(),
                    food.getProtein(),
                    food.getSodium()
            );
        }
        return dto;
    }

}
