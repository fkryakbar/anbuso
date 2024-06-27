<table style="border: none; font-size: 12px">
    <tr>
        <td style="border: none; padding: 3px">Nama Paket Soal</td>
        <td style="border: none; padding: 3px">: {{ $paketSoal->title}}</td>
    </tr>
    <tr>
        <td style="border: none; padding: 3px">Dibuat pada</td>
        <td style="border: none; padding: 3px">: {{ $paketSoal->created_at }}</td>
    </tr>
</table>
<table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
    <thead>
        <tr>
            <th colspan='7' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Penskoran</th>
        </tr>
        <tr>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Kelas</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Progress</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Soal Benar</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Soal Salah</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Skor Akhir</th>
        </tr>
    </thead>
    <tbody>
    @foreach($students as $key=> $student)
        <tr>
            <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key + 1 }}</td>
            <td style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
            <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $student->grade }}</td>
            <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $student->result['answeredTotal'] }}/{{ $student->result['questionTotal'] }} Terjawab ({{ $student->result['progress'] }})</td>
            <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $student->result['trueAnswers'] }}</td>
            <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $student->result['questionTotal'] - $student->result['trueAnswers'] }}</td>
            <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $student->result['score'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
@if($validity && $tingkatKesulitan)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <thead>
            <tr>
                <th colspan='{{ count($paketSoal->questions) + 3 }}' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Validitas dan Tingkat Kesulitan Butir Soal</th>
            </tr>
            <tr>
                <th colspan='2'></th>
                <th colspan='{{ count($paketSoal->questions) + 1 }}' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Butir Soal</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
                @foreach ($paketSoal->questions as $key => $q )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key+1 }}</th>
                @endforeach
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Total benar</th>
            </tr>
        </thead>
        <tbody>
        @foreach($filteredStudents as $studentIndex=> $student)
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $studentIndex + 1 }}</td>
                <td style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                @foreach ($student->answers as $key => $answer )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if($answer->result == 1)
                            1
                        @else
                            0
                        @endif
                    </th>
                @endforeach
                <td style="border: 1px solid rgb(133, 133, 133);">{{ $validity['trueAnswerTotalByStudent'][$studentIndex] }}</td>
            </tr>
        @endforeach
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">Korelitas</td>
                @foreach ($validity['questionsValidity'] as $key => $v )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $v['correlationValue'] }}
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                Validitas
                <p>rTabel = <span className="font-semibold">{{$validity['rTable']}}</span></p>
                </td>
                @foreach ($validity['questionsValidity'] as $key => $v )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if($v['validity'])
                            Valid
                        @else
                            @if($v['correlationValue'])
                                Tidak Valid
                            @else
                                Tidak Dapat dihitung
                            @endif
                        @endif
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    Tingkat Kesulitan
                </td>
                @foreach ($tingkatKesulitan as $key => $t )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                            {{ $t['category'] }}
                        <p>
                            {{$t['value']}}
                        </p>
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
        </tbody>
    </table>
@endif

@if($reliabilitas)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <tbody>
            <tr>
                <th colspan='3' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Reliabilitas Soal</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">rTabel</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">rThitung</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Reliabilitas</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $reliabilitas['rHitung'] }}</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $reliabilitas['rTable'] }}</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                @if ($reliabilitas['reliabilitas'])
                    Reliabel
                @else
                Tidak Reliabel
                @endif
                </th>
            </tr>
        </tbody>
    </table>
@endif

@if($dayaPembeda)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <thead>
            <tr>
                <th colspan='{{ count($paketSoal->questions) + 3 }}' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Daya Pembeda</th>
            </tr>
            <tr>
                <th colspan='2'></th>
                <th colspan='{{ count($paketSoal->questions) + 1 }}' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Butir Soal</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
                @foreach ($paketSoal->questions as $key => $q )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key+1 }}</th>
                @endforeach
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Total benar</th>
            </tr>
        </thead>
        <tbody>
        @foreach($dayaPembeda['upperGroupStudents'] as $studentIndex=> $student)
            <tr>
                <td bgcolor='#bbf7d0' style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $studentIndex + 1 }}</td>
                <td bgcolor='#bbf7d0' style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                @foreach ($student->answers as $key => $answer )
                    <th bgcolor='#bbf7d0' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if($answer->result == 1)
                            1
                        @else
                            0
                        @endif
                    </th>
                @endforeach
                <td bgcolor='#bbf7d0' style="border: 1px solid rgb(133, 133, 133);">{{ $student->trueAnswer }}</td>
            </tr>
        @endforeach
        @foreach($dayaPembeda['middleGroupStudents'] as $studentIndex=> $student)
            <tr>
                <td bgcolor='#fee2e2' style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $studentIndex + 1 }}</td>
                <td bgcolor='#fee2e2' style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                @foreach ($student->answers as $key => $answer )
                    <th bgcolor='#fee2e2' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if($answer->result == 1)
                            1
                        @else
                            0
                        @endif
                    </th>
                @endforeach
                <td bgcolor='#fee2e2' style="border: 1px solid rgb(133, 133, 133);">{{ $student->trueAnswer }}</td>
            </tr>
        @endforeach
        @foreach($dayaPembeda['lowerGroupStudents'] as $studentIndex=> $student)
            <tr>
                <td bgcolor='#fde68a' style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $studentIndex + 1 }}</td>
                <td bgcolor='#fde68a' style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                @foreach ($student->answers as $key => $answer )
                    <th bgcolor='#fde68a' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if($answer->result == 1)
                            1
                        @else
                            0
                        @endif
                    </th>
                @endforeach
                <td bgcolor='#fde68a' style="border: 1px solid rgb(133, 133, 133);">{{ $student->trueAnswer }}</td>
            </tr>
        @endforeach
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">Daya Pembeda</td>
                @foreach ($dayaPembeda['dayaPembeda'] as $key => $p )
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $p['category'] }}
                        <p>{{ $p['value'] }}</p>
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
        </tbody>
    </table>
@endif