package com.tts.IntroSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.tts.IntroSpring"})
@SpringBootApplication
public class IntroSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntroSpringApplication.class, args);
	}

}
