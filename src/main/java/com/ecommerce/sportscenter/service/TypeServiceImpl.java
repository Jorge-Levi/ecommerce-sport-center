package com.ecommerce.sportscenter.service;

import com.ecommerce.sportscenter.entity.Type;
import com.ecommerce.sportscenter.model.TypeResponse;
import com.ecommerce.sportscenter.repository.TypeRepository;

import javax.lang.model.element.TypeElement;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class TypeServiceImpl implements TypeService {

    private final TypeRepository typeRepository;

    public TypeServiceImpl(TypeRepository typeRepository){
        this.typeRepository = typeRepository;
    }

    @Override
    public List<TypeResponse> getAllTypes() {
        log.info("Fetching All Types!!!");

        List<Type> typeList = typeRepository.findAll();

        List<TypeResponse> typeResponses = typeList.stream()
                .map(this::convertToTypeResponse)
                .collect(Collectors.toList());
        return  typeResponses;
    }

    private TypeResponse convertToTypeResponse(Type type){
        return TypeResponse.builder()
                .id(type.getId())
                .name(type.getName())
                .build();
    }


}
