package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Complains;

@Repository
public interface Complainsquerydao extends JpaRepository<Complains, Integer> {

}
