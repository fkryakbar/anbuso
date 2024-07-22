<table style="border: none; font-size: 12px">
    <tr>
        <td style="border: none; padding: 3px">Nama Paket Soal</td>
        <td style="border: none; padding: 3px">: {{ $paketSoalMultipleChoice->title }}</td>
    </tr>
    <tr>
        <td style="border: none; padding: 3px">Dibuat pada</td>
        <td style="border: none; padding: 3px">: {{ $paketSoalMultipleChoice->created_at }}</td>
    </tr>
</table>
<table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
    <thead>
        <tr>
            <th colspan='5' style="text-align: center;border: 1px solid rgb(133, 133, 133);">Penskoran</th>
        </tr>
        <tr>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Kelas</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Progress</th>
            <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Skor Akhir</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($filteredStudentsMultipleChoice as $key => $student)
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key + 1 }}</td>
                <td style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $student->grade }}</td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    {{ $student->result($paketSoalMultipleChoice->slug)['answeredTotal'] }}/{{ $student->result($paketSoalMultipleChoice->slug)['questionTotal'] }}
                    Terjawab
                    ({{ $student->result($paketSoalMultipleChoice->slug)['progress'] }})
                </td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    {{ $student->result($paketSoalMultipleChoice->slug)['score'] }}
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
@if ($validityMultipleChoice && $tingkatKesulitanMultipleChoice)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <thead>
            <tr>
                <th bgcolor="#93c5fd" colspan='{{ count($paketSoalMultipleChoice->questions) + 3 }}'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Validitas dan Tingkat Kesulitan
                    Butir Soal Pilihan Ganda</th>
            </tr>
            <tr>
                <th colspan='2'></th>
                <th colspan='{{ count($paketSoalMultipleChoice->questions) + 1 }}'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Butir Soal</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
                @foreach ($paketSoalMultipleChoice->questions as $key => $q)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key + 1 }}</th>
                @endforeach
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Total benar</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($filteredStudentsMultipleChoice as $studentIndex => $student)
                <tr>
                    <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $studentIndex + 1 }}</td>
                    <td style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                    @foreach ($student->answers as $key => $answer)
                        <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                            @if ($answer->score == 1)
                                1
                            @else
                                0
                            @endif
                        </th>
                    @endforeach
                    <td style="border: 1px solid rgb(133, 133, 133);">
                        {{ $validityMultipleChoice['trueAnswerTotalByStudent'][$studentIndex] }}</td>
                </tr>
            @endforeach
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">Korelitas</td>
                @foreach ($validityMultipleChoice['questionsValidity'] as $key => $v)
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
                    <p>rTabel = <span className="font-semibold">{{ $validityMultipleChoice['rTable'] }}</span></p>
                </td>
                @foreach ($validityMultipleChoice['questionsValidity'] as $key => $v)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if ($v['validity'])
                            Valid
                        @else
                            @if ($v['correlationValue'])
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
                @foreach ($tingkatKesulitanMultipleChoice as $key => $t)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $t['category'] }}
                        <p>
                            {{ $t['value'] }}
                        </p>
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
        </tbody>
    </table>
@endif

@if ($reliabilitasMultipleChoice)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <tbody>
            <tr>
                <th bgcolor="#93c5fd" colspan='3' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    Reliabilitas Soal
                    Pilihan Ganda
                </th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">rTabel</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">rThitung</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Reliabilitas</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    {{ $reliabilitasMultipleChoice['rTable'] }}</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    {{ $reliabilitasMultipleChoice['rHitung'] }}</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    @if ($reliabilitasMultipleChoice['reliabilitas'])
                        Reliabel
                    @else
                        Tidak Reliabel
                    @endif
                </th>
            </tr>
        </tbody>
    </table>
@endif

@if ($dayaPembedaMultipleChoice)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <thead>
            <tr>
                <th bgcolor="#93c5fd" colspan='{{ count($paketSoalMultipleChoice->questions) + 3 }}'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Daya Pembeda Soal Pilihan Ganda
                </th>
            </tr>
            <tr>
                <th colspan='2'></th>
                <th colspan='{{ count($paketSoalMultipleChoice->questions) + 1 }}'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Butir Soal</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
                @foreach ($paketSoalMultipleChoice->questions as $key => $q)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key + 1 }}</th>
                @endforeach
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Total benar</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($dayaPembedaMultipleChoice['upperGroupStudents'] as $studentIndex => $student)
                <tr>
                    <td bgcolor='#bbf7d0' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $studentIndex + 1 }}</td>
                    <td bgcolor='#bbf7d0' style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                    @foreach ($student->answers as $key => $answer)
                        <th bgcolor='#bbf7d0' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                            @if ($answer->score == 1)
                                1
                            @else
                                0
                            @endif
                        </th>
                    @endforeach
                    <td bgcolor='#bbf7d0' style="border: 1px solid rgb(133, 133, 133);">{{ $student->trueAnswer }}</td>
                </tr>
            @endforeach
            @foreach ($dayaPembedaMultipleChoice['middleGroupStudents'] as $studentIndex => $student)
                <tr>
                    <td bgcolor='#fee2e2' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $studentIndex + 1 }}</td>
                    <td bgcolor='#fee2e2' style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                    @foreach ($student->answers as $key => $answer)
                        <th bgcolor='#fee2e2' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                            @if ($answer->score == 1)
                                1
                            @else
                                0
                            @endif
                        </th>
                    @endforeach
                    <td bgcolor='#fee2e2' style="border: 1px solid rgb(133, 133, 133);">{{ $student->trueAnswer }}</td>
                </tr>
            @endforeach
            @foreach ($dayaPembedaMultipleChoice['lowerGroupStudents'] as $studentIndex => $student)
                <tr>
                    <td bgcolor='#fde68a' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $studentIndex + 1 }}</td>
                    <td bgcolor='#fde68a' style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                    @foreach ($student->answers as $key => $answer)
                        <th bgcolor='#fde68a' style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                            @if ($answer->score == 1)
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
                @foreach ($dayaPembedaMultipleChoice['dayaPembeda'] as $key => $p)
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

@if ($validityEssay && $tingkatKesulitanEssay && $dayaPembedaEssay)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <thead>
            <tr>
                <th bgcolor="#a78bfa" colspan='{{ count($paketSoalEssay->questions) + 3 }}'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Validitas dan Tingkat Kesulitan
                    Butir Soal Essay</th>
            </tr>
            <tr>
                <th colspan='2'></th>
                <th colspan='{{ count($paketSoalEssay->questions) + 1 }}'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Butir Soal</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">No</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Nama</th>
                @foreach ($paketSoalEssay->questions as $key => $q)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $key + 1 }}</th>
                @endforeach
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Total benar</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($filteredStudentsEssay as $studentIndex => $student)
                <tr>
                    <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">{{ $studentIndex + 1 }}</td>
                    <td style="border: 1px solid rgb(133, 133, 133);">{{ $student->name }}</td>
                    @foreach ($student->answers as $key => $answer)
                        <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                            {{ $answer->score }}
                        </th>
                    @endforeach
                    <td style="border: 1px solid rgb(133, 133, 133);">
                        {{ $validityEssay['trueAnswerTotalByStudent'][$studentIndex] }}</td>
                </tr>
            @endforeach
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">Korelitas</td>
                @foreach ($validityEssay['questionsValidity'] as $key => $v)
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
                    <p>rTabel = <span className="font-semibold">{{ $validityEssay['rTable'] }}</span></p>
                </td>
                @foreach ($validityEssay['questionsValidity'] as $key => $v)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        @if ($v['validity'])
                            Valid
                        @else
                            @if ($v['correlationValue'])
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
                @foreach ($tingkatKesulitanEssay as $key => $t)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $t['category'] }}
                        <p>
                            {{ $t['value'] }}
                        </p>
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
            <tr>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    Daya Pembeda Essay
                </td>
                @foreach ($dayaPembedaEssay as $key => $t)
                    <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                        {{ $t['category'] }}
                        <p>
                            {{ $t['value'] }}
                        </p>
                    </th>
                @endforeach
                <td style="text-align: center;border: 1px solid rgb(133, 133, 133);"></td>
            </tr>
        </tbody>
    </table>
@endif

@if ($reliabilitasEssay)
    <table width="100%" style="font-size: 10px; ; margin-top: 10px" class="table">
        <tbody>
            <tr>
                <th bgcolor="#a78bfa" colspan='3'
                    style="text-align: center;border: 1px solid rgb(133, 133, 133);">Reliabilitas Soal
                    Essay
                </th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">rTabel</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">rThitung</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">Reliabilitas</th>
            </tr>
            <tr>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    {{ $reliabilitasEssay['rTable'] }}</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    {{ $reliabilitasEssay['rHitung'] }}</th>
                <th style="text-align: center;border: 1px solid rgb(133, 133, 133);">
                    @if ($reliabilitasEssay['reliabilitas'])
                        Reliabel
                    @else
                        Tidak Reliabel
                    @endif
                </th>
            </tr>
        </tbody>
    </table>
@endif
