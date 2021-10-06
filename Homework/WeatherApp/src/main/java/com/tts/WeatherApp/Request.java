package com.tts.WeatherApp;

import lombok.Data;

@Data
public class Request {
    public String getZipCode() {
        return zipCode;
    }

    private String zipCode;
}
