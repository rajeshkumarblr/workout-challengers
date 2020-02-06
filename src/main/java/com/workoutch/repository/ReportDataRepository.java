package com.workoutch.repository;

import com.workoutch.domain.User;
import com.workoutch.domain.ReportData;
import org.springframework.data.repository.CrudRepository;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

public interface ReportDataRepository extends CrudRepository<ReportData, UUID> {


    List<ReportData> findByUserOrderByDateAsc(User user);


    List<ReportData> findByUserAndDateOrderByDateAsc(User user, Date date);


    List<ReportData> findByUserAndDateBetweenOrderByDateAsc(User user, Date startDate, Date endDate);

}
