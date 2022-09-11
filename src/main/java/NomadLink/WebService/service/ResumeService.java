package NomadLink.WebService.service;

import NomadLink.WebService.api.dto.member.request.ResumeRequestDto;
import NomadLink.WebService.domain.member.*;
import NomadLink.WebService.file.FileStore;
import NomadLink.WebService.file.UploadFile;
import NomadLink.WebService.repository.member.MemberRepository;
import NomadLink.WebService.repository.member.ResumeRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final TechStackService techStackService;
    private final MemberRepository memberRepository;
    private final FileStore fileStore;

    public void saveResume(Resume resume) {
        resumeRepository.save(resume);
    }

    public Resume findOneResume(Long userId) {
        return resumeRepository.findOne(userId);
    }

    public List<TechStack> findAllTechStacks(Long resumeId) {
        return resumeRepository.findAllTechStacks(resumeId);
    }

    public void updateResume(Resume findedResume, ResumeRequestDto resumeRequestDto, MultipartFile imageFile) throws IOException {
        MultipartFile file = imageFile;
        UploadFile attachFile = fileStore.storeFile(file);

        findedResume.setAttachFile(attachFile);
        findedResume.setRealName(resumeRequestDto.getRealName());
        findedResume.setPhoneNumber(resumeRequestDto.getPhoneNumber());
        findedResume.setEmail(resumeRequestDto.getEmail());
        findedResume.setAge(resumeRequestDto.getAge());
        findedResume.setGender(resumeRequestDto.getGender());
        findedResume.setDeveloperIntroduction(resumeRequestDto.getDeveloperIntroduction());
        findedResume.setGithubUrl(resumeRequestDto.getGithubUrl());
        findedResume.setBlogUrl(resumeRequestDto.getBlogUrl());
        findedResume.setPortfolioUrl(resumeRequestDto.getPortfolioUrl());
        findedResume.setNation(resumeRequestDto.getNation());
        findedResume.setEmployeeType(resumeRequestDto.getEmployeeType());

        String[] techStacks = resumeRequestDto.getTechStacks();
        log.info("resumeRequestDto.getTechStacks() : {}",techStacks);
        List<String> techStacksList =  Arrays.asList(techStacks); // String[]을 List로 변환
        List<TechStack> lastTechStacksList = techStacksList.stream()
                .map(techStack -> new TechStack((String) techStack))
                .collect(Collectors.toList());
        log.info("lastTechStacksList : {}",lastTechStacksList);

        resumeRepository.deleteAllTechStacks(findedResume.getId());

        lastTechStacksList.stream()
                .forEach(t -> techStackService.saveTechStack((TechStack) t));

        Member findedMember = memberRepository.findOne(findedResume.getMember().getId()); // member 테이블에도 techStacks 저장

        lastTechStacksList.stream()
                .forEach(t -> findedMember.setTechStack((TechStack) t));

        lastTechStacksList.stream()
                .forEach(t -> findedResume.setTechStack((TechStack) t));

    }

    public List<Resume> findAllResume() {
        log.info("service result : {}", resumeRepository.findAll());

        return resumeRepository.findAll();
    }

}
