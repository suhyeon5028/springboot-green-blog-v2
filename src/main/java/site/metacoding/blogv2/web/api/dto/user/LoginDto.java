package site.metacoding.blogv2.web.api.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// DTO : Data Transper Object (통신으로 전달하거나 받는 오브젝트를 엔티티 타입으로 변환)

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginDto {
    private String username;
    private String password;
    private String remember;
}