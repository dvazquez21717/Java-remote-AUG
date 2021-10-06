package com.tts.WeatherApp.repository;

import com.tts.WeatherApp.domain.Zipcode;
import org.springframework.data.repository.CrudRepository;


public interface ZipcodeRepository extends CrudRepository<Zipcode, Long> {
        public Zipcode findById(int id);

}
