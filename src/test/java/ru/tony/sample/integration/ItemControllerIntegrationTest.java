package ru.tony.sample.integration;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.MOCK;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= MOCK)
@AutoConfigureMockMvc
public class ItemControllerIntegrationTest {


    @Autowired
    private MockMvc mvc;

    @Test
    public void requestShouldFailWithNotAuthorized() throws Exception {
        mvc.perform(get("/api/items"))
                .andExpect(status().is(401));
    }

    @Test
    public void requestShouldPassCorrectForAuthorizedAdmin() throws Exception {
        String token = mvc.perform(post("/login").contentType(MediaType.MULTIPART_FORM_DATA)
                .param("username", "staff").param("password", "staff"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getHeader("Authorization");

        mvc.perform(get("/api/items").header("Authorization", token))
                .andExpect(status().is(200));
    }


}