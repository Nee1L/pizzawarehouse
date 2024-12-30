package com.srp.user.services;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BucketService {

    Logger LOG = LogManager.getLogger(BucketService.class);

    private final AmazonS3 s3Client;

    public List<Bucket> getBucketList() {
        LOG.info("getting bucket list... ");
        return s3Client.listBuckets();
    }

    public boolean validateBucket(String bucketName) {
        List<Bucket> bucketList = getBucketList();
        LOG.info("Bucket list:" + bucketList);
        return bucketList.stream().anyMatch(m -> bucketName.equals(m.getName()));
    }

    public void getObjectFromBucket(String bucketName, String objectName) throws IOException {
        S3Object s3Object = s3Client.getObject(bucketName, objectName);
        S3ObjectInputStream inputStream = s3Object.getObjectContent();
        FileOutputStream fos = new FileOutputStream(new File("opt/test/v1/" + objectName));
        byte[] read_buf = new byte[1024];
        int read_len = 0;
        while ((read_len = inputStream.read(read_buf)) > 0) {
            fos.write(read_buf, 0, read_len);
        }
        inputStream.close();
        fos.close();
    }

    public void createBucket(String bucketName) {
        s3Client.createBucket(bucketName);
    }

    public void putObjectIntoBucket(String bucketName, String objectName, byte[] photo) {
        try {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(photo.length);
            metadata.setContentType("image/jpeg");
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(photo);
            s3Client.putObject(bucketName, objectName, byteArrayInputStream, metadata);
        } catch (AmazonServiceException e) {
            System.err.println(e.getErrorMessage());
            System.exit(1);
        }
    }
}
