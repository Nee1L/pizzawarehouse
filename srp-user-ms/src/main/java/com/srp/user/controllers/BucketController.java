package com.srp.user.controllers;

import com.amazonaws.services.s3.model.Bucket;
import com.srp.user.services.BucketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bucket")
public class BucketController {

    private final BucketService bucketService;

    @GetMapping
    public void getBucketList() {
        List<Bucket> bucketList = bucketService.getBucketList();
        System.out.println("bucketList:" + bucketList);
    }

    @GetMapping("/downloadObj")
    public void downloadObject(@RequestParam("bucketName") String bucketName, @RequestParam("objName") String objName) throws Exception {
        bucketService.getObjectFromBucket(bucketName, objName);
    }

    @PostMapping("/uploadObj")
    public void uploadObject(@RequestParam("bucketName") String bucketName, @RequestParam("objName") String objName, @RequestParam("photo") MultipartFile photo) throws IOException {
        bucketService.putObjectIntoBucket(bucketName, objName, photo.getBytes());
    }

    @PostMapping("/createBucket")
    public String createBucket(@RequestParam("bucketName") String bucketName) {
        bucketService.createBucket(bucketName);
        return "done";
    }
}