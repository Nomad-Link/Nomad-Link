package NomadLink.WebService.file;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Component
public class FileStore {

    @Value("${file.dir}")
    private String fileDir;

    public String getFullPath(String fileName) {
        return fileDir + fileName;
    }

    // 첨부파일 하나 저장
    public UploadFile storeFile(MultipartFile multipartFile) throws IOException {
        if(multipartFile.isEmpty()) {
            return null;
        }

        String originalFilename = multipartFile.getOriginalFilename();
        // image.png면 확장자 png 추출
        int pos = originalFilename.lastIndexOf(".");
        String substring = originalFilename.substring(pos + 1);

        String uuid = UUID.randomUUID().toString(); // 서버에 저장하는 파일명

        String storeFileName = uuid + '.' + substring;
        multipartFile.transferTo(new File(getFullPath(storeFileName)));

        return new UploadFile(originalFilename, storeFileName);
    }

}
