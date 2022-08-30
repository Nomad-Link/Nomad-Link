package NomadLink.WebService.service;

import NomadLink.WebService.api.dto.member.request.ResumeRequestDto;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.repository.member.ResumeRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ResumeService {

    private final ResumeRepository resumeRepository;

    public void saveResume(Resume resume) {
        resumeRepository.save(resume);
    }

    public Resume findOneResume(String userId) {
        return resumeRepository.findOne(userId);
    }

    public void updateResume(Resume findedResume, ResumeRequestDto resumeRequestDto) {
        findedResume.setRealName(resumeRequestDto.getRealName());
        findedResume.setPhoneNumber(resumeRequestDto.getPhoneNumber());
        findedResume.setEmail(resumeRequestDto.getEmail());
        findedResume.setAge(resumeRequestDto.getAge());
        findedResume.setGender(resumeRequestDto.getGender());
        findedResume.setGithubUrl(resumeRequestDto.getGithubUrl());
        findedResume.setBlogUrl(resumeRequestDto.getBlogUrl());
        findedResume.setPortfolioUrl(resumeRequestDto.getPortfolioUrl());
        findedResume.setNation(resumeRequestDto.getNation());
        findedResume.setEmployeeType(resumeRequestDto.getEmployeeType());
    }

    public List<Resume> findAllResume() {
        log.info("service result : {}", resumeRepository.findAll());

        return resumeRepository.findAll();
    }

}
