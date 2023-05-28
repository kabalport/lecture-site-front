import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import HomePageIntro from "../components/HomePage/HomePageIntro";

const HomePage: React.FC = () => {
    // 임시로 사용될 인기 강의 데이터
    const courses = [
        { title: "부동산 기초 이해", instructor: "김OO", rating: 5 },
        { title: "부동산 투자 전략", instructor: "박OO", rating: 4.5 },
        { title: "부동산 시장 분석", instructor: "이OO", rating: 4.7 }
    ];

    // 임시로 사용될 팀 멤버 데이터
    const teamMembers = [
        { name: "김OO", role: "CEO" },
        { name: "박OO", role: "CTO" },
        { name: "이OO", role: "COO" }
    ];

    return (
        <Box>
            <Box bgcolor="#1f2437" >
            <Box width={'100%'} minHeight={485} color={"white"}  style={{margin: "auto"}}>
                <Box height={320} padding={20}>
                    <HomePageIntro
                        title="부동산 특화 맞춤형<br/>특화 코스"
                        subtitle="부동산 융합 아카데미는 다양한 부동산 관련 교육을 제공합니다.<br/>로드맵을 확인하고, 강의를 검색해보세요!"
                    />
                </Box>
            </Box>
            </Box>
            <Box bgcolor="#0080ff">
                <Box width={'100%'} minHeight={485} color={"white"}  style={{margin: "auto"}}>
                    <Box height={320} padding={20}>
                        <HomePageIntro
                            title="부동산교육 전문 코스들을<br/>만나보세요."
                        />
            <Typography variant="h4" gutterBottom></Typography>
            <Grid container spacing={4}>
                {courses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{course.title}</Typography>
                                <Typography variant="body2">강사: {course.instructor}</Typography>
                                <Typography variant="body2">평점: {course.rating}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Box>
                </Box>
            </Box>
            <Box bgcolor="#6730ec" padding={20}>
                <Box width={'100%'} minHeight={485} color={"white"} style={{margin: "auto"}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">로고</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">나의경력개발경로 찾기</Typography>
                                    <Typography variant="body1">현재상황의 맞는 나만의 체계적인 경력개발경로를 설계해 드립니다.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardContent>
                                    <Button variant="contained" color="primary">경력개발 경로 찾기</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box bgcolor="#6730ec" padding={20}>

</Box>
            <Box bgcolor="#f9f9f9">
            <Typography variant="h4" gutterBottom >다양한 카테고리의<br/>부동산교육 강의를 만나보세요.</Typography>
                <Typography variant="h4" gutterBottom >관심있는 부동산 교육 카테고리를 선택해보세요.</Typography>
                <Button>강의 더보기</Button>
                <Box id="group25">
                    <Typography variant="h6">
                        데이터기술
                    </Typography>
                    <Box id="group42" className="tag-container1 slider-text">
                        <Typography variant="body1" id="lbl7" className="tag-nm f-row a-ic">
                            예비창업자
                        </Typography>
                    </Box>
                    <Typography variant="body2" id="label12" className="cata-label1 slider-text">
                        데이터기술
                    </Typography>
                </Box>
            <Grid container spacing={4}>

                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center">
                                    <Avatar />
                                    <Box marginLeft={2}>
                                        <Typography variant="h6">{member.name}</Typography>
                                        <Typography variant="body2">{member.role}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </Box>
    );
};

export default HomePage;
