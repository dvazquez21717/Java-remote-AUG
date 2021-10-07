package com.tts.WeatherApp.repository;

import com.tts.WeatherApp.domain.Zipcode;
import org.springframework.data.repository.CrudRepository;


public interface ZipcodeRepository extends CrudRepository<Zipcode, Long> {
//        List<Zipcode> findbyZipcode(String zipcode);

}
