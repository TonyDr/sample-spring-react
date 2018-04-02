package ru.tony.sample.controllers;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import ru.tony.sample.entity.Item;
import ru.tony.sample.repositories.ItemRepository;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(value = ItemController.class, secure = false)
public class ItemControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ItemRepository itemRepository;

    @Captor
    private ArgumentCaptor<Item> itemArgumentCaptor;


    @Test
    public void shouldPostDataCorretly() throws Exception {

        mockMvc.perform(post("/api/items")
                .contentType(APPLICATION_JSON)
                .content(" { \"name\":\"Ivan\", \"description\":\"Test description\"}"))
                .andExpect(status().isOk());

        verify(itemRepository, times(1)).save(itemArgumentCaptor.capture());
        assertEquals("Ivan", itemArgumentCaptor.getValue().getName());
        assertEquals("Test description", itemArgumentCaptor.getValue().getDescription());
    }


    @Test
    @Ignore
    public void shouldPutDataCorretly() throws Exception {

        mockMvc.perform(put("/api/items/12345")
                .contentType(APPLICATION_JSON)
                .content(" { \"name\":\"Petr\", \"description\":\"Petr description\"}"))
                .andExpect(status().isOk());

        verify(itemRepository, times(1)).save(itemArgumentCaptor.capture());
        assertEquals("Petr", itemArgumentCaptor.getValue().getName());
        assertEquals("Petr description", itemArgumentCaptor.getValue().getDescription());
    }
}