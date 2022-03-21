package site.metacoding.blogv2.web.api;

import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import site.metacoding.blogv2.service.PostService;

@RequiredArgsConstructor
@RestController
public class PostApiController {
    private final PostService postsService;
}