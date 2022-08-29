package NomadLink.WebService.service;

import NomadLink.WebService.domain.member.Resume;
import NomadLink.WebService.repository.member.ResumeRepository;
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

    public Resume findOneResume(long memberId) {
        return resumeRepository.findOne(memberId);
    }

    public List<Resume> findAllResume() {
        log.info("service result : {}", resumeRepository.findAll());

        return resumeRepository.findAll();
    }

}
