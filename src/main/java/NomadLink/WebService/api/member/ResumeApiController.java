package NomadLink.WebService.api.member;

import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.service.ResumeService;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ResumeApiController {

    private final ResumeService resumeService;

    @ResponseBody
    @PostMapping("/api/resume")
    public void resumePost(@RequestBody ResumeRequestDto resumeRequestDto) {
        Resume resume = new Resume();
        resume.setRealName(resumeRequestDto.getRealName());
        resume.setPhoneNumber(resumeRequestDto.getPhoneNumber());
        resume.setEmail(resumeRequestDto.getEmail());
        resume.setAge(resumeRequestDto.getAge());
        resume.setGender(resumeRequestDto.getGender());
        resume.setGithubUrl(resumeRequestDto.getGithubUrl());
        resume.setBlogUrl(resumeRequestDto.getBlogUrl());
        resume.setPortfolioUrl(resumeRequestDto.getPortfolioUrl());
        resume.setRole(resumeRequestDto.getRole());
        resume.setNation(resumeRequestDto.getNation());
        resume.setEmployeeType(resumeRequestDto.getEmployeeType());
        resume.setTechStacks(resumeRequestDto.getTechStacks());

        resumeService.saveResume(resume);
    }

    @ResponseBody
    @GetMapping("/api/resume/{resumeId}")
    public ResumeResponseDto resumeGet(@PathVariable long resumeId) {
        Resume resume = resumeService.findOneResume(resumeId);

        ResumeResponseDto response = new ResumeResponseDto();
        response.setRealName(resume.getRealName());
        response.setPhoneNumber(resume.getPhoneNumber());
        response.setEmail(resume.getEmail());
        response.setAge(resume.getAge());
        response.setGender(resume.getGender());
        response.setGithubUrl(resume.getGithubUrl());
        response.setBlogUrl(resume.getBlogUrl());
        response.setPortfolioUrl(resume.getPortfolioUrl());
        response.setRole(resume.getRole());
        response.setNation(resume.getNation());
        response.setEmployeeType(resume.getEmployeeType());
        response.setTechStacks(resume.getTechStacks());

        return response;
    }

    @ResponseBody
    @GetMapping("/api/resume/all")
    public List<ResumeResponseDto> resumeAllGet() {
        List<Resume> resumes = resumeService.findAllResume();

        log.info("/api/resume/all resumes result : {}", resumes);

        List<ResumeResponseDto> result = resumes.stream()
                .map(r -> new ResumeResponseDto(r))
                .collect(Collectors.toList());

        log.info("/api/resume/all return result : {}", result);

        return result;
    }

    @Data
    static class ResumeRequestDto {

        private String realName; // 개발자의 실제 이름
        private String phoneNumber;
        private String email;
        private String age;
        private Gender gender;
        private String githubUrl;
        private String blogUrl;
        private String portfolioUrl;
        private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)
        private Nation nation;
        private EmployeeType employeeType;
        private String techStacks;

    }

    @Data
    @NoArgsConstructor
    static class ResumeResponseDto {

        private String realName; // 개발자의 실제 이름
        private String phoneNumber;
        private String email;
        private String age;
        private Gender gender;
        private String githubUrl;
        private String blogUrl;
        private String portfolioUrl;
        private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)
        private Nation nation;
        private EmployeeType employeeType;
        private String techStacks;

        public ResumeResponseDto(Resume resume) {
            this.realName = resume.getRealName();
            this.phoneNumber = resume.getPhoneNumber();
            this.email = resume.getEmail();
            this.age = resume.getAge();
            this.gender = resume.getGender();
            this.githubUrl = resume.getGithubUrl();
            this.blogUrl = resume.getBlogUrl();
            this.portfolioUrl = resume.getPortfolioUrl();
            this.role = resume.getRole();
            this.nation = resume.getNation();
            this.employeeType = resume.getEmployeeType();
            this.techStacks = resume.getTechStacks();
        }

    }

}