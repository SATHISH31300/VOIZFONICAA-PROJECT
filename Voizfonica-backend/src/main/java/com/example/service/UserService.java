package com.example.service;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.Complainsquerydao;
import com.example.dao.ContactUsDao;
import com.example.dao.NewUserDao;
import com.example.entities.Complains;
import com.example.entities.ContactUs;
import com.example.entities.Users;


@Service
@Transactional
public class UserService {
	

		public UserService() {
			System.out.println("<<<<<<<<<<<<<<<POST SERVICE INSTANTIATED>>>>>>>>>>>>>>>>>>>>>>>>>");
		}
		
		@Autowired
		NewUserDao newUserDao;
		
		@Autowired
		ContactUsDao contactus;
		
		@Autowired
		Complainsquerydao complainsquery;		
		
		
		public Users saveUser(Users userData) {
			newUserDao.save(userData);
			return userData;
		}
		public Users findByEmailId(String email) {
			return newUserDao.findByEmail(email);
//			return ((UserService) newUserDao).findByEmail(email);			
		}
		public Users login(Users users) {
			return newUserDao.findByEmailAndPassword(users.getEmail(),users.getPassword());
		}


		public ContactUs saveContact(ContactUs userData) {
			contactus.save(userData);
			return userData;
		}
		
				
		public Complains saveComplain(Complains userquery) {
			complainsquery.save(userquery);
			return userquery;
		}

			
	
		
		
		
		
	
	}



