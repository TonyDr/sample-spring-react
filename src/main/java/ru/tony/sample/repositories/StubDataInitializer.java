package ru.tony.sample.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import ru.tony.sample.entity.User;

import javax.annotation.PostConstruct;

@Configuration
public class StubDataInitializer {

    private BCryptPasswordEncoder passwordEncoder;
    private UserRepository userRepository;

    @Autowired
    public StubDataInitializer(BCryptPasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void initData() {
        userRepository.save(new User("admin", passwordEncoder.encode("admin"), "admin description", new String[]{"ROLE_ADMIN"}));
        userRepository.save(new User("staff", passwordEncoder.encode("staff"), "staff description", new String[]{"ROLE_USER"} ));
    }
}
