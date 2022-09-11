package NomadLink.WebService.api.member;

import NomadLink.WebService.api.dto.member.request.ResumeRequestDto;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.file.FileStore;
import NomadLink.WebService.file.UploadFile;
import NomadLink.WebService.repository.member.MemberRepository;
import NomadLink.WebService.service.ResumeService;
import NomadLink.WebService.service.TechStackService;
import NomadLink.WebService.session.SessionConst;
import NomadLink.WebService.testData.SearchTechStack;
import NomadLink.WebService.testData.SearchTechStackRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ResumeApiController {

    private final ResumeService resumeService;
    private final SearchTechStackRepository searchTechStackRepository;
    private final MemberRepository memberRepository;
    private final TechStackService techStackService;
    private final FileStore fileStore;

    @ResponseBody
    @PostMapping("/api/mypage/resume")
    public void resumePost(@ModelAttribute ResumeRequestDto resumeRequestDto, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) throws IOException {
        Resume resume = new Resume();

        MultipartFile file = resumeRequestDto.getAttachFile();
        UploadFile attachFile = fileStore.storeFile(file);

        resume.setAttachFile(attachFile);
        resume.setRealName(resumeRequestDto.getRealName());
        resume.setPhoneNumber(resumeRequestDto.getPhoneNumber());
        resume.setEmail(resumeRequestDto.getEmail());
        resume.setAge(resumeRequestDto.getAge());
        resume.setGender(resumeRequestDto.getGender());
        resume.setDeveloperIntroduction(resumeRequestDto.getDeveloperIntroduction());
        resume.setGithubUrl(resumeRequestDto.getGithubUrl());
        resume.setBlogUrl(resumeRequestDto.getBlogUrl());
        resume.setPortfolioUrl(resumeRequestDto.getPortfolioUrl());
        resume.setRole(resumeRequestDto.getRole());
        resume.setNation(resumeRequestDto.getNation());
        resume.setEmployeeType(resumeRequestDto.getEmployeeType());

        String[] techStacks = resumeRequestDto.getTechStacks();
        log.info("resumeRequestDto.getTechStacks() : {}",techStacks);
        List<String> techStacksList =  Arrays.asList(techStacks); // String[]을 List로 변환
        List<TechStack> lastTechStacksList = techStacksList.stream()
                .map(techStack -> new TechStack((String) techStack))
                .collect(Collectors.toList());
        log.info("lastTechStacksList : {}",lastTechStacksList);
//        resume.setTechStacks(lastTechStacksList);

        lastTechStacksList.stream()
                .forEach(t -> techStackService.saveTechStack((TechStack) t));

        Member findedMember = memberRepository.findOne(loginMember.getId()); // member 테이블에도 techStacks 저장
//        findedMember.setTechStacks(lastTechStacksList);

        lastTechStacksList.stream()
                .forEach(t -> findedMember.setTechStack((TechStack) t));

        lastTechStacksList.stream()
                .forEach(t -> resume.setTechStack((TechStack) t));

        if (loginMember != null) {
            resume.setMember(loginMember);
        }

        resumeService.saveResume(resume);
    }

    @ResponseBody
    @GetMapping("/api/mypage/resume/get/{userId}")
    public ResumeResponseDto resumeGet(@PathVariable String userId, @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        Resume resume = resumeService.findOneResume(loginMember.getId());
        List<TechStack> techStacks = resumeService.findAllTechStacks(resume.getId());

        ResumeResponseDto response = new ResumeResponseDto();
        response.setStoreFileName(resume.getAttachFile().getStoreFileName());
        response.setRealName(resume.getRealName());
        response.setPhoneNumber(resume.getPhoneNumber());
        response.setEmail(resume.getEmail());
        response.setAge(resume.getAge());
        response.setGender(resume.getGender());
        response.setDeveloperIntroduction(resume.getDeveloperIntroduction());
        response.setGithubUrl(resume.getGithubUrl());
        response.setBlogUrl(resume.getBlogUrl());
        response.setPortfolioUrl(resume.getPortfolioUrl());
        response.setRole(resume.getRole());
        response.setNation(resume.getNation());
        response.setEmployeeType(resume.getEmployeeType());
        if (techStacks.size() == 0) {
            response.setTechStacks(null);
        }else if(techStacks.size() != 0) {
            response.setTechStacks(techStacks.stream()
                    .map(t -> new TechStackResponseDto(t))
                    .collect(Collectors.toList()));
        }

        return response;
    }

    @ResponseBody
    @PostMapping("/api/mypage/resume/update/{userId}")
    public void resumeUpdate(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember, @PathVariable String userId, @ModelAttribute ResumeRequestDto resumeRequestDto) throws IOException {
        Resume findedResume = resumeService.findOneResume(loginMember.getId());
        resumeService.updateResume(findedResume, resumeRequestDto);
    }

    @ResponseBody
    @GetMapping("/api/mypage/resume/all")
    public List<ResumeResponseDto> resumeAllGet() {
        List<Resume> resumes = resumeService.findAllResume();

        log.info("/api/resume/all resumes result : {}", resumes);

        List<ResumeResponseDto> result = resumes.stream()
                .map(r -> new ResumeResponseDto(r))
                .collect(Collectors.toList());

        log.info("/api/resume/all return result : {}", result);

        return result;
    }

    @ResponseBody
    @GetMapping("/api/techstack")
    public List<SearchTechStack> getAllTechStacks() {
        return searchTechStackRepository.findAll();
    }

    @ResponseBody
    @GetMapping("/api/mypage/resume/image/{filename}") // 이력서 사진
    public Resource viewImage(@PathVariable String filename) throws MalformedURLException {
        return new UrlResource("file:" + fileStore.getFullPath(filename));
    }

    @Data
    @NoArgsConstructor
    static class ResumeResponseDto {

        private String storeFileName;
        private String realName; // 개발자의 실제 이름
        private String phoneNumber;
        private String email;
        private String age;
        private Gender gender;
        private String developerIntroduction;
        private String githubUrl;
        private String blogUrl;
        private String portfolioUrl;
        private Role role; // 구직을 원하는 개발자의 역할 (ex - SERVER,  FRONTEND, ANDROID, IOS, AI)
        private Nation nation;
        private EmployeeType employeeType;
        private List<TechStackResponseDto> techStacks;

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

            this.techStacks = resume.getTechStacks().stream()
                    .map(t -> new TechStackResponseDto(t))
                    .collect(Collectors.toList());
        }

    }

    @Data
    static class TechStackResponseDto {

        String techName;

        public TechStackResponseDto(TechStack techStack) {
            this.techName = techStack.getTechName();
        }

    }

}
