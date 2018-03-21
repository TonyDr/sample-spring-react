package ru.tony.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import ru.tony.sample.entity.User;
import ru.tony.sample.repositories.UserRepository;

@Component
public class SampleUserDetailService implements UserDetailsService{

    private UserRepository repository;

    @Autowired
    public SampleUserDetailService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByName(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found for user name" + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(),
                AuthorityUtils.createAuthorityList(user.getRoles()));
    }
}
